import Authenticate from "@/Layouts/Authenticated/Authenticate";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import { Head, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Create({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <Authenticate auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Edit Movie: {movie.name}</h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Name" />
                    <TextInput
                        type="text"
                        name="name"
                        variant="primary-outline"
                        defaultValue={movie.name}
                        handleChange={onHandleChange}
                        placeholder="Enter the name of the movie"
                        isError={errors.name}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        forInput="category"
                        className="mt-4"
                        value="Category"
                    />
                    <TextInput
                        type="text"
                        name="category"
                        variant="primary-outline"
                        defaultValue={movie.category}
                        handleChange={onHandleChange}
                        placeholder="Enter the category of the movie"
                        isError={errors.category}
                    />
                    <InputError message={errors.category} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        forInput="video_url"
                        className="mt-4"
                        value="Video URL"
                    />
                    <TextInput
                        type="url"
                        name="video_url"
                        variant="primary-outline"
                        defaultValue={movie.video_url}
                        handleChange={onHandleChange}
                        placeholder="Enter the video url of the movie"
                        isError={errors.video_url}
                    />
                    <InputError message={errors.video_url} className="mt-2" />
                </div>

                <div>
                    <img
                        src={`/storage/${movie.thumbnail}`}
                        className="w-40 h-full mt-5"
                        alt=""
                    />
                    <InputLabel
                        forInput="thumbnail"
                        className="mt-4"
                        value="Thumbnail"
                    />
                    <TextInput
                        type="file"
                        name="thumbnail"
                        variant="primary-outline"
                        defaultValue={movie.file}
                        handleChange={onHandleChange}
                        placeholder="Insert thumbnail of the movie"
                        isError={errors.thumbnail}
                    />
                    <InputError message={errors.thumbnail} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        forInput="rating"
                        className="mt-4"
                        value="Rating"
                    />
                    <TextInput
                        type="number"
                        name="rating"
                        variant="primary-outline"
                        defaultValue={movie.rating}
                        handleChange={onHandleChange}
                        placeholder="Insert rating of the movie"
                        isError={errors.rating}
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>

                <div className="flex flew-row mt-4 items-center">
                    <InputLabel
                        forInput="is_featured"
                        className="mr-3 mt-2"
                        value="Is Featured"
                    />
                    <Checkbox
                        type="checkbox"
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        checked={movie.is_featured}
                    />
                    <InputError message={errors.is_featured} className="mt-2" />
                </div>

                <DangerButton
                    type="submit"
                    className="mt-4"
                    processing={processing}
                >
                    Save
                </DangerButton>
            </form>
        </Authenticate>
    );
}
