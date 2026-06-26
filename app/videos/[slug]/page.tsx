export default async function Page({ params }: any) {
const { slug } = await params

return (
<div>
Video: {slug}
</div>
)
}
