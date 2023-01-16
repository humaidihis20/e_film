import Authenticate from "@/Layouts/Authenticated/Authenticate";
import DangerButton from "@/Components/DangerButton";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage, movies }) {
    const { delete: destroy, put } = useForm();
    return (
        <Authenticate auth={auth}>
            <Head title="List of Movie" />
            <Link href={route("admin.dashboard.movie.create")}>
                <DangerButton type="button" className="w-40 mb-8">
                    Insert New Movie
                </DangerButton>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={1}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img
                                    src={`/storage/${movie.thumbnail}`}
                                    className="w-32 rounded-md"
                                    alt=""
                                />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td>
                                <Link
                                    href={route(
                                        "admin.dashboard.movie.edit",
                                        movie.id
                                    )}
                                >
                                    <DangerButton
                                        type="button"
                                        variant="warning"
                                        className="w-24"
                                    >
                                        Edit
                                    </DangerButton>
                                </Link>
                                <div
                                    onClick={() => {
                                        movie.deleted_at
                                            ? put(
                                                  route(
                                                      "admin.dashboard.movie.restore",
                                                      movie.id
                                                  )
                                              )
                                            : destroy(
                                                  route(
                                                      "admin.dashboard.movie.destroy",
                                                      movie.id
                                                  )
                                              );
                                    }}
                                >
                                    <DangerButton
                                        type="button"
                                        variant="danger"
                                        className="w-24"
                                    >
                                        {movie.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </DangerButton>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticate>
    );
}