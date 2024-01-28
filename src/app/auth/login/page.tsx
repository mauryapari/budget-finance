import { Social } from "@/components/social";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Suspense } from "react";

const LoginPage = () => {
    return (
        <div className="w-[350px]">
            <Card className="text-center">
                <CardHeader>
                    <CardTitle>
                        Proceed to Login
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Suspense>
                        <Social />
                    </Suspense>
                </CardContent>
            </Card>
        </div>
    )
}


export default LoginPage;