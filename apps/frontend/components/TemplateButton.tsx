import { Button } from "./ui/button";

export default function TemplateButton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Button className="h-10 text-sm bg-gray-100 hover:bg-gray-200" variant="outline">
                Clean App
            </Button>
            <Button className="h-10 text-sm bg-gray-100 hover:bg-gray-200" variant="outline">
                Dashboard
            </Button>
            <Button className="h-10 text-sm bg-gray-100 hover:bg-gray-200" variant="outline">
                Landing Page
            </Button>
            <Button className="h-10 text-sm bg-gray-100 hover:bg-gray-200" variant="outline">
                Portfolio
            </Button>
        </div>
    );
}
