import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from '@clerk/nextjs/server'

interface Props {
    params: Promise<{ id: string }>;
}
const UpdateEvent = async ({ params }: Props) => {
    const { id } = await params;
    const { userId } = await auth();

    // Protect the route by checking if the user is signed in
    if (!userId) {
        return <div>Sign in to view this page</div>
    }

    const event = await getEventById(id);

    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
            </section>

            <div className="wrapper my-8">
                <EventForm
                    type="Update"
                    event={event}
                    eventId={event._id}
                    userId={userId}
                />
            </div>
        </>
    );
};

export default UpdateEvent;