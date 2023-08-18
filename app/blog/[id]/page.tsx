//taking in the params from the address bar.
export default function Page({ params }: {
    //Defining the types.
    params: { id: string}
}) {
    //Outputting the parmams to the screen.
    return <h1>ID: {params.id}</h1>
}