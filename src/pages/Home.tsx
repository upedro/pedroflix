import React, { useCallback, useEffect, useState } from 'react'
import {api} from '../services/api'
import style from './style.module.scss'
import { Box, Button, Container, FilterBox, ListBox, SearchBox, SearchInput, PaginationBox, Logo } from './styled'
import { Card } from '../components/Card/Card'
import LogoPedroFlix from '../img/logo2.png'
import { Pagination, Input, Radio } from 'antd';
import 'antd/dist/antd.dark.css';



export function Home (){
    const baseURL = `http://image.tmdb.org/t/p/w185`
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [list,setList] = useState([])
    const [searchTerm,setsearchTerm] = useState("")
    const [sfilter, setSFilter] = useState('clear')

    const handleMovies = useCallback(
        async (page = 1) => {
            const {data} = await api.get(`movie/popular?API_KEY&page=${page}`)
            setPage(data.page)
            setList(data.results)
            setTotalPages(data.total_pages)
        },
        [],
    )
    const listFilmes = list?.map(l =><Card 
        key={l.id} 
        imagem={(l?.poster_path ||l.profile_path) && (baseURL + (l?.poster_path ||l.profile_path))} 
        title={l.original_title || l.name || l.original_name}
        countRate={l.vote_average ? (`Nota:  ${parseInt(l.vote_average)/2}`) : `Popularidade: ${l.popularity}`}
        rate={l.vote_average ? parseInt(l.vote_average)/2 : (parseFloat(l.popularity)/1000)*100 }
        countVotes={l.vote_count ? `Votos: ${l.vote_count}` : ''}
        />)

    useEffect(() => {
        handleMovies(page)
    }, [handleMovies])



    const handleArtist = useCallback(
        async (e,page=1) => {
            if(e){
                const {data} = await api.get(`search/person?API_KEY&query=${e}&page=${page}`)
                setPage(page)
                setList(data.results)
                setTotalPages(data.total_pages)
            } else {
                const {data} = await api.get(`person/popular?API_KEY&page=${page}`)
                setList(data.results)
                setPage(page)
                setTotalPages(data.total_pages)
            }
            
        },
        [],
    )

    const handleTv = useCallback(
        async (e,page=1) => {
            if(e){
                const {data} = await api.get(`search/tv?API_KEY&query=${e}&page=${page}`)
                setPage(page)
                setList(data.results)
                setTotalPages(data.total_pages)
            } else {
                const {data} = await api.get(`tv/popular?API_KEY&page=${page}`)
                setList(data.results)
                setPage(page)
                setTotalPages(data.total_pages)
            }
            
        },
        [],
    )

    const handleMovie = useCallback(
        async (e,page=1) => {
            console.log('movie',e, page)
            if(e){
                const {data} = await api.get(`search/movie?API_KEY&query=${e}&page=${page}`)
                setPage(page)
                setList(data.results)
                setTotalPages(data.total_pages)
            } else {
                const {data} = await api.get(`movie/popular?API_KEY&page=${page}`)
                setList(data.results)
                setPage(page)
                setTotalPages(data.total_pages)
            }
            
        },
        [],
    )

    const handleMulti = useCallback(
        async (e,page=1) => {
            console.log(e)
            if(e){
                const {data} = await api.get(`search/multi?API_KEY&query=${e}&page=${page}`)
                setList(data.results)
                setPage(page)
                setTotalPages(data.total_pages)
            }       
        },[],
    )

    const handleFilter = (e:any,query?:any, filter = sfilter) => {
        switch (filter) {
            case 'artist':
                return handleArtist(query,e);

            case 'movie':
                return handleMovie(query,e);
            
            case 'tvseries':
                return handleTv(query,e);

            case 'multi':
                return handleMulti(query, e);
        
            default:
                setPage(e)
                console.log('switch default')
                handleMovie(searchTerm,e)
        }
        
    }

    return(
        <Container>

            <SearchBox>
                <Box>
                    <img style={{width:80}} src={LogoPedroFlix}/>
                <SearchInput onChange={(s)=>{setsearchTerm(s.target.value)}}  placeholder='Pesquisar...' type="text" name="busca" id="" />                

                 <Radio.Group style={{}}  
                    onChange={(e)=> {sfilter === e.target.value ? setSFilter(''):setSFilter(e.target.value); handleFilter(1,searchTerm,e.target.value)}}>
                    <Radio.Button value="movie">Movie</Radio.Button>
                    <Radio.Button value="tvseries">TV Series</Radio.Button>
                    <Radio.Button value="artist">Artist</Radio.Button>
                    <Radio.Button value="multi">Any</Radio.Button>        
                </Radio.Group>              
  
                <Button onClick={()=>{handleFilter(1,searchTerm); setsearchTerm(searchTerm)}} >Buscar</Button>
                </Box>
            </SearchBox>


            <ListBox>
                {listFilmes}
            </ListBox>

            <PaginationBox>
            <div style={{display:'flex', flex:1, justifyContent:'flex-end'}}>
                <Pagination  responsive={true} defaultCurrent={1} current={page} onChange={(e)=>handleFilter(e,searchTerm)} total={totalPages} showSizeChanger={false} />
            </div>
            </PaginationBox>
            

        </Container>
    )
}