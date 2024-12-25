import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Nâng cấp Pro',
    description: 'Nâng cấp Pro',
}

async function UpgradeLayout({ children }: { children: React.ReactNode }) {
    return <div style={{ backgroundColor: '' }}>{children}</div>
}

export default UpgradeLayout;