#!/bin/bash
# ============================================================
# ONE-TIME server setup for CliniquePro
# Run as: deployer@82.29.174.93
#   bash setup-server.sh
# ============================================================
set -e

REPO_URL="https://github.com/bkourouma/cliniquepro_web.git"
APP_DIR="/var/www/cliniquepro"
NODE_VERSION="20"

echo "==> Installing Node.js $NODE_VERSION via nvm..."
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
nvm install $NODE_VERSION
nvm use $NODE_VERSION
nvm alias default $NODE_VERSION

echo "==> Installing PM2..."
npm install -g pm2
pm2 startup systemd -u deployer --hp /home/deployer
# Copy the command it prints and run it as root

echo "==> Installing nginx..."
sudo apt-get update -qq
sudo apt-get install -y nginx

echo "==> Cloning repository..."
sudo mkdir -p $APP_DIR
sudo chown deployer:deployer $APP_DIR
git clone $REPO_URL $APP_DIR

echo "==> Creating .env.local..."
cat > $APP_DIR/site/.env.local <<'EOF'
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=formations@allianceconsultants.net
SMTP_PASS=CHANGE_ME
SMTP_FROM=CliniquePro <formations@allianceconsultants.net>
EOF
echo "  !! Edit $APP_DIR/site/.env.local with real credentials !!"

echo "==> Initial build..."
cd $APP_DIR/site
npm ci
npm run build

echo "==> Starting app with PM2..."
PORT=3500 pm2 start npm --name cliniquepro -- start
pm2 save

echo "==> Configuring nginx..."
sudo cp /var/www/cliniquepro/nginx/cliniquepro.conf /etc/nginx/sites-available/cliniquepro
sudo ln -sf /etc/nginx/sites-available/cliniquepro /etc/nginx/sites-enabled/cliniquepro
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

echo ""
echo "==> Setup complete!"
echo "    App running on port 3500 behind nginx."
echo "    Next step: add your SSH public key to GitHub Actions secrets (see README)."
