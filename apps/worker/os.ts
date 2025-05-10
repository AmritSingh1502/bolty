import { prismaClient } from "db/client";

function getBaseWorkerDir(type: "NEXTJS" | "REACT_NATIVE" | "REACT") {
    if (type === "NEXTJS") {
        return "/tmp/next-app";
    }
    if (type === "REACT") {
        return "/tmp/react-app";
    }
    return "/tmp/mobile-app";
}

export async function onFileUpdate(filePath: string, fileContent: string, projectId: string, promptId: string, type: "NEXTJS" | "REACT_NATIVE" | "REACT") {
    await prismaClient.action.create({
        data: {
            projectId,
            promptId,
            content: `Updated file ${filePath}`
        },
    });
}

export async function onShellCommand(shellCommand: string, projectId: string, promptId: string) {
    const commands = shellCommand.split("&&");
    for (const command of commands) {
        console.log(`Running command: ${command}`);

        await prismaClient.action.create({
            data: {
                projectId,
                promptId,
                content: `Ran command: ${command}`,
            },
        });
    }
}

export function onPromptEnd(promptId: string) {
    console.log(`Prompt ${promptId} completed`);
}