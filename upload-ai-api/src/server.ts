import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-comletion";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { UploadVideoRoute } from "./routes/upload-video";

const app = fastify()

app.register(fastifyCors, {
    origin: "*",
})

app.register(getAllPromptsRoute)
app.register(UploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running')
})