import styled from 'styled-components'

export const StyledForm = styled.div`
  .card {
    min-width: 450px;
  }
  .card form {
    margin-top: 2rem;
  }
  .card .p-field {
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
  @media screen and (max-width: 640px) {
    .card {
      width: 100%;
      min-width: 0;
    }
  }
`