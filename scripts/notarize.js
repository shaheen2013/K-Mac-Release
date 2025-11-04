import { notarize } from "@electron/notarize";
import { resolve } from "path";
import { execSync } from "child_process";

async function main() {
  const appPath = process.argv[2];

  if (!appPath) {
    throw new Error("❌ App path not provided");
  }

  console.log("🚀 Notarizing:", appPath);

  await notarize({
    appBundleId: "com.klevere.app", // replace with your bundle id
    appPath: resolve(appPath),
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASSWORD,
    teamId: process.env.APPLE_TEAM_ID,
  });

  console.log("✅ Notarization completed");
}

main().catch(err => {
  console.error("❌ Notarization failed:", err);
  process.exit(1);
});
