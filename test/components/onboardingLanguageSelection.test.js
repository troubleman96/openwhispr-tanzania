const assert = require("node:assert/strict");
const test = require("node:test");

const load = () => import("../../src/components/onboarding/languageOptions.ts");

test("onboarding prioritizes Kiswahili for this Tanzania-focused fork", async () => {
  const { getOnboardingLanguageOptions } = await load();
  const options = getOnboardingLanguageOptions("", []);

  assert.deepEqual(
    options.slice(0, 6).map(({ code }) => code),
    ["sw", "en-US", "zh-CN", "es", "ar", "af"]
  );
  assert.equal(
    options.some(({ code }) => code === "auto"),
    false
  );
});

test("Kiswahili search finds Whisper-supported Swahili and displays its native name", async () => {
  const { getOnboardingLanguageOptions, getOnboardingLanguageNativeLabel } = await load();
  const options = getOnboardingLanguageOptions("Kiswahili", []);

  assert.deepEqual(
    options.map(({ code }) => code),
    ["sw"]
  );
  assert.equal(getOnboardingLanguageNativeLabel(options[0]), "Kiswahili");
  assert.equal(options[0].whisper, true);
});

test("search keeps existing selections visible and recognizes Hindustani as Hindi", async () => {
  const { getOnboardingLanguageOptions } = await load();
  const options = getOnboardingLanguageOptions("Hind", ["en-US", "es"]);

  assert.deepEqual(
    options.slice(0, 3).map(({ code }) => code),
    ["en-US", "es", "hi"]
  );
});
