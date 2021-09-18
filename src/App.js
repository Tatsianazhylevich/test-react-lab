import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import PostService from './Api/getData';
import { MyInfo } from './components/MyInfo';
import { MyTable } from './components/MyTable';
import MyInput from './components/UI/Input/MyInput';
import Loader from './components/UI/Loader/Loader';
import Pagination from './components/UI/pagination/pagination';
import MySelect from './components/UI/Select/MySelect';
import { useFetching } from './hooks/useFetching';
import { ErrorPage } from './pages/ErrorPage';


function App() {
  const [data, setData] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [searchQuery, setSearhQuery] = useState('');
  const [directionSort, setDirectionSort] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const [dataPerPage] = useState(20);
  const [info, setInfo] = useState('');
  const [fetchData, dataLoading, dataError] = useFetching(async () => {
    const response = await PostService.getData();
    setData(response.data);
  })

  useEffect(() => {
    fetchData()
  }, [])

  const filteredPosts = useMemo(() => {
    return data.filter(person => person.firstName.toLowerCase().includes(searchQuery.toLowerCase()) && 
      person.adress.state.toLowerCase().includes(selectedState.toLocaleLowerCase())
    ) ?? [];
    
  }, [searchQuery, selectedState, data])

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = filteredPosts.slice(indexOfFirstData, indexOfLastData);
  const paginate = (pageNumber) => setcurrentPage(pageNumber);



  const sortedData = (field) => {
    if(directionSort) {
      const sortData = [...data].sort((a, b) => a[field] > b[field] ? 1 : -1);
      setData(sortData);
    } else {
      const reverseSortData = [...data].sort((a, b) => b[field] > a[field] ? 1 : -1);
      setData(reverseSortData);
    }
    setDirectionSort(!directionSort);
  }

  const selectByState = (event) => {
    setSelectedState(event.target.value);
  }


  const infoData = (row) => {
    setInfo(row);
  }

  return (
    <StyledApp className="App">
      {dataError && <ErrorPage dataError={dataError}/>}
      <StyledFilter>
        <MyInput
          placeholder='Search by name: '
          value={searchQuery}
          onChange={e => setSearhQuery(e.target.value)}
        />
        <MySelect 
                  value={selectedState}
                  selectByState={selectByState}
                  filteredPosts={data}
                  defaultValue='Filter by State'
        ></MySelect>
      </StyledFilter>
      {dataLoading ? <Loader></Loader> : <MyTable data={currentData} sortedData={sortedData} infoData={infoData} directionSort={directionSort}/>}
      <Pagination dataPerPage={dataPerPage} totalData={filteredPosts.length} paginate={paginate}/>
      <StyledMyInfo info={info}></StyledMyInfo>
      

    </StyledApp>
  );
}

export default App;

const StyledMyInfo = styled(MyInfo)`
  display: flex;
  justify-content: center;
`
const StyledApp = styled.div`
  text-align: center;
`
const StyledFilter = styled.div`
  display: flex;
  justify-content: space-around;
`

