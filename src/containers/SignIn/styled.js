import styled from 'styled-components'

export const StyledForm = styled.div`
  .card {
    width: 550px;
    background: #fff;
  }
  .card form {
    margin-top: 2rem;
  }
  .card .p-field {
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: 640px) {
    .card {
      width: 90vw;
      min-width: 0;
    }
  }
`