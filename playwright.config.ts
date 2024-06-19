export const defineConfig = {
  testDir: "./test",
  fullyParallel:      true,
  retries: 0,
  reporter: "html",
  projects:                   [
],
  webServer: {
    command:     'npm run dev',
    url:             'http://127.0.0.1:3000',
  },
};
