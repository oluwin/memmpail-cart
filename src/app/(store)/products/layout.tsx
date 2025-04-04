import ProtectedPage from "@/components/components/protected-page/protected-page";

export default function ProductsLayout({
                                           children,
                                       }: {
    children: React.ReactNode
}) {
    return <ProtectedPage>{children}</ProtectedPage>
}