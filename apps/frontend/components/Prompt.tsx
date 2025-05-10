"use client";
import { Button } from "./ui/button";
import { Beaker, Send } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { BACKEND_URL } from "@/config";

export function Prompt() {
    const [prompt, setPrompt] = useState("");
    const { getToken } = useAuth();
    return (
        <div className="flex flex-col gap-2">
            <textarea 
                className="w-full p-3 border rounded-lg resize-none"
                placeholder="Describe your app idea..."
                value={prompt} onChange={(e) => setPrompt(e.target.value)}
                rows={2}
            />
            <div className="flex justify-end">
                <Button
                    onClick={async() =>{
                        const token = await getToken();
                        const response = await axios.post(`${BACKEND_URL}/project`, {
                            prompt: prompt,
                        },{
                            headers: {
                                "Authorization": `Bearer ${token}`
                            }
                        })
                        console.log(response.data);
                    }}
                    size="sm"
                >
                    <Send className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
