import PropTypes from 'prop-types'
import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from '../api/users'

export function User({ id }) {
  const userInfoQuery = useQuery({
    queryKey: ['users', id],
    queryFn: () => getUserInfo(id),
  })

  const userInfo = userInfoQuery.data ?? {}

  return <strong>{userInfo?.username ?? id}</strong>
}

User.propTypes = {
  id: PropTypes.string.isRequired,
}
