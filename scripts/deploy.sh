# Deployment

Run this script to build and prepare for deployment:

#!/bin/bash

echo "🚀 Building portfolio for production..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🏗️  Building Next.js application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "Next steps:"
    echo "1. Deploy the .next folder and other required files"
    echo "2. Set environment variables on your hosting platform:"
    echo "   - RESEND_API_KEY"
    echo "   - CONTACT_EMAIL"
    echo "   - RESEND_FROM_EMAIL"
    echo ""
    echo "🎉 Your portfolio is ready to deploy!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
