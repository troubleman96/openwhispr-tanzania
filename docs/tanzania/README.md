# Tanzania-first setup

This community fork is for people who live, study, work, and collaborate in Tanzania. It keeps the existing OpenWhispr interface and core behavior; the Tanzania-specific addition is guidance for using the existing Kiswahili transcription support.

## Kiswahili dictation

1. During first-run setup, choose **Swahili** in the existing spoken-language picker. If you also dictate in English, select English too.
2. In **Settings → Language**, set **Transcription language** to **Swahili** for Kiswahili-first dictation, or leave it on **Auto** if you regularly switch languages and want detection.
3. For on-device processing, use the local **Whisper** provider. OpenWhispr's language registry marks Swahili (`sw`) as supported by Whisper. Other model providers have different language lists; for example, the bundled Parakeet TDT v3 catalog does not list Swahili.
4. Start with Whisper's `base` model on a modest computer; use a larger model if your device has enough memory and you want to compare accuracy. The first model download needs internet. Once downloaded, local Whisper processes audio on your device without sending the recording to a transcription cloud service.

See [Local Whisper Setup](../../LOCAL_WHISPER_SETUP.md) for model sizes, installation steps, and troubleshooting. Transcription quality can vary with microphone quality, speaker, accent, background noise, and Kiswahili-English code-switching; test with your own everyday speech before relying on it for important records.

## Privacy and connectivity

Local transcription is useful when you want audio to stay on your device, but the initial model download needs an internet connection. Other features—such as cloud AI, account sync, team sharing, or cloud transcription—may still require internet access and may send data to their configured services. Check each feature's settings before using it with sensitive material.

## Current scope

- This fork preserves OpenWhispr's existing UI and interaction patterns; it does not replace them with a separate dashboard or prototype.
- The app interface is not translated into Kiswahili in this update; use the existing **Swahili** label in the app.
- The download links in the main README lead to upstream OpenWhispr releases; this fork does **not** yet publish Tanzania-specific installers.

## Help improve the Tanzania experience

When reporting a transcription issue, include the selected model, whether the audio was Kiswahili-only or mixed with English, and what happened. Do not include private recordings, transcripts, or sensitive personal information in a public issue. Suggestions for missing local vocabulary, names, and workflow needs are welcome.
