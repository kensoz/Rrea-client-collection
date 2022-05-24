import { gql, DocumentNode } from '@apollo/client'

// GraphQL GQL
// Common
const GRAPHQL_COMMON: DocumentNode = gql`
  fragment commonStatus on Query {
    code
    message
  }
`

// Form Query
const GRAPHQL_FORM: DocumentNode = gql`
  ${GRAPHQL_COMMON}
  query getFrom {
    ...commonStatus
    area {
      value
      text
    }
    name {
      value
      text
    }
    race {
      value
      text
    }
    job {
      value
      text
    }
  }
`

// Data Query
const GRAPHQL_DATA: DocumentNode = gql`
  ${GRAPHQL_COMMON}
  query getData($areaCode: String!, $jobCode: [String]!, $nameCode: [String]!, $raceCode: [String]!) {
    ...commonStatus
    data(areaCode: $areaCode, jobCode: $jobCode, nameCode: $nameCode, raceCode: $raceCode) {
      count {
        area
        count
        value
      }
      user {
        id
        name
        nameSpell
        nameCode
        job
        jobCode
        race
        raceCode
        skill
        photo
        area
        areaCode
        YYYYMMDD
        HHMMss
      }
    }
  }
`

export { GRAPHQL_FORM, GRAPHQL_DATA }
