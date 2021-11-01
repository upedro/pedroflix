import styled from 'styled-components'

export const Container = styled.div`
    background: black;
    color:white;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    padding: 1rem 5rem 2rem 5rem;
    flex: 1;
    @media (max-width: 400px)
    {
      padding: .3rem .5rem .2rem .5rem;
    }
    
`

export const SearchBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  gap:2rem ;
  padding: 2rem;
  justify-content: center;  
  @media (max-width: 400px)
    {
      padding: .2rem;
      flex-direction: column;
      align-items: center;
    }
  

`

export const PaginationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  gap:2rem ;
  padding: 1rem;
  justify-content: center;  
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;  
    gap: 2rem;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 300px)
    {
      
    }

`

export const FilterBox = styled.div`
  display: inline-block;
  position: relative;
  flex:1;
  margin-top: 0.9rem;

`
export const ListBox = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    @media (max-width: 500px)
    {
      padding: .3rem
    }
 
`

export const Card = styled.div`

    border-radius: 4px;
    -webkit-box-shadow: 1px -2px 15px 4px rgba(0,0,0,0.84); 
    box-shadow: 1px -2px 15px 4px rgba(0,0,0,0.84);
    
`

export const SearchInput = styled.input`
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 40px;
    border-radius: 4px;
    padding-left: 4px;
    background: black;
    padding: 8px;
    
`

export const Button = styled.button`

    box-shadow: 0px 5px 5px -7px #177ddc;
    background:linear-gradient(to bottom, black 5%, black 100%);
    background-color:#177ddc;
    border-radius:4px;
    display:inline-block;
    cursor:pointer;
    color:#fff;
    font-family:Arial;
    font-size:1rem;
    font-weight:regular;
    padding:4px 32px;
    text-decoration:none;
    text-shadow:0px 1px 0px #177ddc;
    max-width: 150px;

  :hover{
    color:white;
    background:linear-gradient(to bottom, #177ddc 5%, black 100%);
	  background-color:#177ddc;
  }

  :active{
    position:relative;
	  top:1px;
  }

`
export const Logo = styled.image`
    width: 30px;
    height: 32px;
`