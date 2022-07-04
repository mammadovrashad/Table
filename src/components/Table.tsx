
import { VscDebugRestart } from 'react-icons/vsc';
import { BiFilterAlt } from 'react-icons/bi';
import '../index.css';
import {Pagination, Stack, Table} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {  KeyboardEvent, useState } from 'react';


// css code MaterialUI=============================================================================
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height:'35px',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '18ch',
      },
    },
  },
}));


// css code MaterialUI=============================================================================



interface Iid {
  id: number
}
export interface ITBody extends Iid {
  kys: number,
  tarix: string,
  interval: string,
  hekim: string,
  oti: number,
  masinlar: string,
  seyyar: number,
  barb: number,
  uarb: number,
  nevroloji: number,
  hekimPsix: number,
  sua: number,
  hekimLab: number
};

export interface IThead extends Iid {
  name: string
}



export default function tableFunc({ thead, tbody,setTbody,addTbody}: any):JSX.Element {

// React Events+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const deleteTableRow=(id:number)=>{
  let remainingArr = tbody.filter((data:ITBody) =>{
    return data.id !=id}
    )
   setTbody([...remainingArr])
}

const reloadTable=()=>{
     window.location.reload();
}

const searchByDoctor=(event:KeyboardEvent<HTMLInputElement>)=>{ {
     setTbody([...addTbody]);
    if (event.key === "Enter") {
       const value=(event.target as HTMLInputElement).value;
       console.log(value);
       const filteredCoins = tbody.filter((docName:ITBody) =>
        docName.hekim.toLowerCase().includes(value.toLowerCase())
        
      );   
      setTbody([...filteredCoins])
      // setFilterData([...filteredCoins])
    }
}
   
}
// React Events+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  return (
  <Box className='w-full bg-blue-100 h-screen flex flex-col items-center '>
      <Box className='w-10/12 h-[80px] p-0 mt-[12px] flex justify-between'>
       <Toolbar className='w-2/12 p-0 ml-[-15px]'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
          <Search className='bg-white w-full rounded-[5px]'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase onKeyUp={searchByDoctor}
              placeholder="Search table item…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
        <Toolbar className='w-[9%] mr-[5px] p-[0px] flex justify-between'>
          <Box onClick={reloadTable}  className='cursor-pointer h-[50px] mr-[5px] rounded-[4px] flex items-center justify-center w-[55px] border-solid border-[2px] border-blue-500 ' >
             <VscDebugRestart className='text-blue-500  font-[25px]'/>
          </Box>
          <Box className='cursor-pointer h-[50px] rounded-[4px] flex items-center justify-center w-[55px] bg-blue-500 text-white'>
             <BiFilterAlt/>
          </Box>
        </Toolbar>
      </Box>
      <Box className=' w-10/12'>
        <TableContainer component={Paper} className=' rounded-[15px] h-[500px]'>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className='border-none'>
              <TableRow >
                {
                  thead.map((item: IThead) => {
                    return (
                      <TableCell className=' text-cyan-500 font-bold ' align='center' key={item.id}>{item.name}</TableCell>
                    )
                  })
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {tbody.map((row: ITBody) => {
                return (
                  <TableRow key={row.id} className='table-cell-h table-cell-even'
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
                    >
                    <TableCell align='center' className='table-cell'>{row.kys}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.tarix}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.interval}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.hekim}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.oti}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.masinlar}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.seyyar}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.barb}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.uarb}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.nevroloji}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.hekimPsix}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.sua}</TableCell>
                    <TableCell align="center" className='table-cell'>{row.hekimLab}</TableCell>
                    <TableCell align="center" className='table-cell'>
                      <IconButton aria-label="delete">
                        <DeleteIcon onClick={()=>{deleteTableRow(row.id)}} className='text-red-300 cursor-pointer'/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Box className='flex  items-center justify-end translate-y-[-80px] translate-x-[-5%]'>
               <Stack spacing={2} className='translate-x-[-10px] translate-y-[20px]'>
                   <Pagination 
                  sx={{
                    ".MuiButtonBase-root, .MuiPaginationItem-root, .MuiPaginationItem-sizeMedium, .MuiPaginationItem-outlined, .MuiPaginationItem-rounded, .MuiPaginationItem-page":{
                      color:"#00B3FC",
                      border:"1px solid #00B3FC",
                      "&:hover, &focus ,&:visited":{
                        backgroundColor:"#00B3FC",
                        color:"white"
          
                      }
                    }
                  }}
                  color="primary"
                    count={5}   shape="rounded"  />
               </Stack>
        </Box>
      </Box>
    </Box>
  );
}