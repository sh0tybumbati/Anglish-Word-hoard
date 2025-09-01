# Upgrade Notes

## Current Status
The Wordbook is fully functional with some dependency warnings that don't affect operation.

## Optional Dependency Updates (when convenient)

To clean up the npm warnings, you can update these packages:

```bash
# Update ESLint to v9+
npm install eslint@^9.0.0 @eslint/config-array@^0.18.0 @eslint/object-schema@^2.1.4 --save-dev

# Update other dependencies
npm install rimraf@^6.0.0 glob@^11.0.0 --save-dev

# Remove the deprecated inflight dependency (it's pulled in by other packages)
# This will resolve automatically when other packages update their dependencies
```

## Security Vulnerabilities
Run `npm audit fix` to address the 2 moderate vulnerabilities when convenient.

## Current Functionality
- ✅ Development server working (port 3001)
- ✅ All features operational
- ✅ Authentic Anglish wordbook with dual view modes
- ✅ Advanced search and etymology features
- ✅ Modern React + TypeScript architecture