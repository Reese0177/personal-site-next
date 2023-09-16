import { useRouter } from "next/router";
import Index from ".";

export default function Page() {
    const router = useRouter();
    const { page } = router.query;
    return <Index page={page} />;
}