import React from 'react'
import useAxios from 'axios-hooks'
import { useNavigate } from 'react-router-dom'

import { Container } from 'src/ui/templates'
import { Heading1 } from 'src/ui/typography'
import { NoContacts, EmptyContactList } from 'src/ui/molecules'
import { SearchBar, DepartmentTabs, ContactList, ContactListSkeleton } from 'src/ui/organisms'
import { AppContext } from 'src/shared/store'

export const Home = () => {
  const [{ contacts }, setContacts] = React.useContext(AppContext)
  const navigate = useNavigate()

  const [{ data, loading, error }, refetch] = useAxios(
    'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users'
  )

  const [currentDepartment, setCurrentDepartment] = React.useState<string>('all')
  const [searchPhrase, setSearchPhrase] = React.useState('')

  const filteredContactItems = React.useMemo(() => {
    if (!!contacts && currentDepartment === 'all' && !searchPhrase) {
      return contacts.items
    }

    if (!!contacts) {
      return [...contacts.items].filter((item) => {
        return (item.firstName.toLowerCase().includes(searchPhrase) ||
          item.lastName.toLowerCase().includes(searchPhrase) ||
          item.userTag.toLowerCase().includes(searchPhrase)) &&
          (currentDepartment === item.department || currentDepartment === 'all')
      })
    }

    return []
  }, [contacts, currentDepartment, searchPhrase])

  const onItemClickHandler = (id: number) => navigate(`/contact/${id}`)

  React.useEffect(() => {
    if (data) {
      setContacts({ contacts: data, lastUpdate: Date.now() })
    }
  }, [data, setContacts])

  if (error) return <NoContacts onRetry={refetch}/>

  return (
    <Container>
      <div style={{ marginLeft: 8 }}>
        <Heading1>Поиск</Heading1>
      </div>
      <SearchBar onChange={setSearchPhrase} />
      <DepartmentTabs setCurrentDepartment={setCurrentDepartment} currentDepartment={currentDepartment} departmentList={[]} />
      {loading ? <ContactListSkeleton amount={8} /> : null}
      {!loading && contacts ? (
        <ContactList contacts={filteredContactItems} onItemClick={onItemClickHandler}/>
      ): null}
      {!loading && filteredContactItems.length === 0 ? <EmptyContactList /> : null}
    </Container>
  )
}
