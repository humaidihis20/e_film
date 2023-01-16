import Authenticate from "@/Layouts/Authenticated/Authenticate";
import DangerButton from "@/Components/DangerButton";
import { Link, Head } from "@inertiajs/inertia-react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage }) {
    return (
        <Authenticate auth={auth}>
            <Head title="Dashboad - Admin Movie" />
            <Link href={route("admin.dashboard.movie.create")}>
                <DangerButton type="button" className="w-40 mb-8">
                    Insert New Movie
                </DangerButton>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}
        </Authenticate>
    );
}
