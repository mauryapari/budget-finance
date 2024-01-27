import { Social } from "@/components/social";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const LoginPage = () => {
    return (
        <div className="container mx-auto">
            <div className="w-[350px]">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle>
                            Proceed to Login
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Social />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}


export default LoginPage;