# Tanzania-first setup

This community fork is for people who live, study, work, and collaborate in Tanzania. It is not limited to one industry or institution. Its first local improvement is making **Kiswahili** easy to find during onboarding while preserving the upstream app's choice of local or cloud processing.

## Kiswahili dictation

1. During first-run setup, choose **Kiswahili**. If you also dictate in English, select English too.
2. In **Settings → Language**, set **Transcription language** to **Swahili** for Kiswahili-first dictation, or leave it on **Auto** if you regularly switch languages and want detection.
3. For on-device processing, use the local **Whisper** provider. The language registry in this fork marks Swahili (`sw`) as supported by Whisper. Other model providers have different language lists; for example, the bundled Parakeet TDT v3 catalog does not list Swahili.
4. Start with Whisper's `base` model on a modest computer; use a larger model if your device has enough memory and you want to compare accuracy. The first model download needs internet. Once downloaded, local Whisper processes audio on your device without sending the recording to a transcription cloud service.

See [Local Whisper Setup](../../LOCAL_WHISPER_SETUP.md) for model sizes, installation steps, and troubleshooting. Transcription quality can vary with microphone quality, speaker, accent, background noise, and Kiswahili-English code-switching; test with your own everyday speech before relying on it for important records.

## Privacy and connectivity

Local transcription is useful when you want audio to stay on your device, but the initial model download needs an internet connection. Other features—such as cloud AI, account sync, team sharing, or cloud transcription—may still require internet access and may send data to their configured services. Check each feature's settings before using it with sensitive material.

## Current scope

- The spoken-language picker puts **Kiswahili** first and accepts both “Kiswahili” and “Swahili” as search terms.
- This fork does **not** yet translate the app's full interface into Kiswahili.
- The download links in the main README lead to upstream OpenWhispr releases; this fork does **not** yet publish Tanzania-specific installers.

## Help improve the Tanzania experience

When reporting a transcription issue, include the selected model, whether the audio was Kiswahili-only or mixed with English, and what happened. Do not include private recordings, transcripts, or sensitive personal information in a public issue. Suggestions for missing local vocabulary, names, and workflow needs are welcome.
