import AuthorLayout from '@/layouts/AuthorLayout'
import Card from '@/components/Card'
import SectionContainer from '@/components/SectionContainer'

export default function Page() {
  const author = [
    {
      body: { code: 'test' },
    },
  ]
  const mainContent = [
    {
      name: 'name',
      avatar: 'avatar',
      occupation: 'occupation',
      company: 'company',
      email: 'email',
      twitter: 'twitter',
      linkedin: 'linkedin',
      github: 'github',
    },
  ]

  return (
    <>
      <AuthorLayout content={mainContent}>
        <SectionContainer>
          <div>wtf</div>
        </SectionContainer>
      </AuthorLayout>
    </>
  )
}
