# Tanzania-first setup

This community fork is for people who live, study, work, and collaborate in Tanzania. **Bonga** keeps the original interface layout and core behavior, makes Kiswahili the first-run UI language, and retains the other supported UI and transcription languages.

## Kiswahili dictation

1. During first-run setup, choose **Kiswahili** in the spoken-language picker. If you also dictate in English, select English too.
2. In **Settings → Language**, set **Transcription language** to **Kiswahili** for Kiswahili-first dictation, or leave it on **Auto** if you regularly switch languages and want detection.
3. For on-device processing, use the local **Whisper** provider. Bonga's language registry marks Kiswahili (`sw`) as supported by Whisper. Other model providers have different language lists; for example, the bundled Parakeet TDT v3 catalog does not list Kiswahili.
4. For the strongest Kiswahili accuracy, use Whisper **Large** (`large-v3`) if your computer has about 10 GB of available memory; it needs about 3 GB of disk space. Use `base` on a modest computer for quicker, lighter transcription. The first model download needs internet. Once downloaded, local Whisper processes audio on your device without sending the recording to a transcription cloud service.

See [Local Whisper Setup](../../LOCAL_WHISPER_SETUP.md) for model sizes, installation steps, and troubleshooting. Transcription quality can vary with microphone quality, speaker, accent, background noise, and Kiswahili-English code-switching; test with your own everyday speech before relying on it for important records.

## Privacy and connectivity

Local transcription is useful when you want audio to stay on your device, but the initial model download needs an internet connection. Other features—such as cloud AI, account sync, team sharing, or cloud transcription—may still require internet access and may send data to their configured services. Check each feature's settings before using it with sensitive material.

## Current scope

- This fork preserves the original UI layout and interaction patterns; it does not replace them with a separate dashboard or prototype.
- The interface is available in **Kiswahili** and the other existing supported UI languages.
- The download links in the main README lead to upstream OpenWhispr releases; this fork does **not** yet publish Tanzania-specific installers.

## Help improve the Tanzania experience

When reporting a transcription issue, include the selected model, whether the audio was Kiswahili-only or mixed with English, and what happened. Do not include private recordings, transcripts, or sensitive personal information in a public issue. Suggestions for missing local vocabulary, names, and workflow needs are welcome.
