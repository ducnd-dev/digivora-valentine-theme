#!/bin/bash

# 🔄 Post-Valentine Theme Transition Script
# Tự động chuyển đổi theme từ Valentine sang Modern & Professional
# Run sau ngày 15/2/2026

set -e  # Exit on error

echo "🎨 Starting Post-Valentine Theme Transition..."
echo "================================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "config/settings_data.json" ]; then
    echo "${RED}❌ Error: config/settings_data.json not found!${NC}"
    echo "Please run this script from theme root directory"
    exit 1
fi

echo "${YELLOW}Step 1: Creating backup...${NC}"
BACKUP_FILE="config/settings_data_valentine_backup_$(date +%Y%m%d_%H%M%S).json"
cp config/settings_data.json "$BACKUP_FILE"
echo "${GREEN}✅ Backup created: $BACKUP_FILE${NC}"
echo ""

echo "${YELLOW}Step 2: Checking if POST_VALENTINE_COLOR_SCHEME.json exists...${NC}"
if [ ! -f "POST_VALENTINE_COLOR_SCHEME.json" ]; then
    echo "${RED}❌ Error: POST_VALENTINE_COLOR_SCHEME.json not found!${NC}"
    exit 1
fi
echo "${GREEN}✅ Color scheme file found${NC}"
echo ""

echo "${YELLOW}Step 3: Updating color schemes...${NC}"
echo "This step requires manual edit. Please:"
echo "1. Open config/settings_data.json"
echo "2. Find the 'color_schemes' section (around line 239)"
echo "3. Copy color_schemes from POST_VALENTINE_COLOR_SCHEME.json"
echo "4. Replace the current color_schemes"
echo ""
echo "Press Enter when done..."
read

echo "${YELLOW}Step 4: Updating text references...${NC}"
echo "Removing Valentine-specific text..."

# Using sed for macOS (BSD sed)
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' 's/💝 Only \$\[amount\] more for FREE Valentine'\''s shipping!/🚚 Free shipping on orders over $[amount]!/g' config/settings_data.json
    sed -i '' 's/Only \[amount\] away from FREE Valentine'\''s shipping!/Only [amount] away from FREE shipping!/g' config/settings_data.json
    sed -i '' 's/Order by Feb 10 for Valentine'\''s delivery!//g' config/settings_data.json
    sed -i '' 's/⏰ Valentine'\''s cart expires in/⏰ Your cart expires in/g' config/settings_data.json
    sed -i '' 's/❤️ Complete Your Valentine'\''s Set/✨ Complete Your Set/g' config/settings_data.json
    sed -i '' 's/#e63946/#2563EB/g' config/settings_data.json  # Replace red with blue for progress bars
else
    # Linux
    sed -i 's/💝 Only \$\[amount\] more for FREE Valentine'\''s shipping!/🚚 Free shipping on orders over $[amount]!/g' config/settings_data.json
    sed -i 's/Only \[amount\] away from FREE Valentine'\''s shipping!/Only [amount] away from FREE shipping!/g' config/settings_data.json
    sed -i 's/Order by Feb 10 for Valentine'\''s delivery!//g' config/settings_data.json
    sed -i 's/⏰ Valentine'\''s cart expires in/⏰ Your cart expires in/g' config/settings_data.json
    sed -i 's/❤️ Complete Your Valentine'\''s Set/✨ Complete Your Set/g' config/settings_data.json
    sed -i 's/#e63946/#2563EB/g' config/settings_data.json
fi

echo "${GREEN}✅ Text references updated${NC}"
echo ""

echo "${YELLOW}Step 5: Validating JSON...${NC}"
if command -v python3 &> /dev/null; then
    if python3 -c "import json; json.load(open('config/settings_data.json'))" 2>/dev/null; then
        echo "${GREEN}✅ JSON is valid${NC}"
    else
        echo "${RED}❌ JSON validation failed! Restoring backup...${NC}"
        cp "$BACKUP_FILE" config/settings_data.json
        exit 1
    fi
else
    echo "${YELLOW}⚠️  Python3 not found, skipping JSON validation${NC}"
fi
echo ""

echo "${YELLOW}Step 6: Git commit...${NC}"
git add config/settings_data.json
git commit -m "feat: Post-Valentine color scheme transition

- Changed from Valentine pink/red to Modern blue theme
- Updated color schemes to professional palette
- Removed Valentine-specific text references
- Backup saved as: $BACKUP_FILE
"
echo "${GREEN}✅ Changes committed to git${NC}"
echo ""

echo "================================================"
echo "${GREEN}🎉 Theme transition completed successfully!${NC}"
echo ""
echo "Next steps:"
echo "1. Review changes: git show HEAD"
echo "2. Test locally if possible"
echo "3. Push to Shopify: git push"
echo "4. Verify in theme editor"
echo "5. Check homepage, product pages, cart"
echo ""
echo "Backup location: $BACKUP_FILE"
echo ""
echo "To revert: cp $BACKUP_FILE config/settings_data.json"
echo "================================================"
