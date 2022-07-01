import '../index.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

interface Iid {
  id: number
}
export interface ITBody extends Iid {
  kys: number,
  tarix: string,
  interval: string,
  hekim: number,
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

export default function tableFunc({ thead, tbody }: any) {
  return (
    <Box className='w-full bg-blue-100 h-screen flex items-center justify-center '>
      <Box className=' w-8/12'>
        <TableContainer component={Paper} className=' rounded-[15px]'>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
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
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='center'>{row.kys}</TableCell>
                    <TableCell align="center">{row.tarix}</TableCell>
                    <TableCell align="center">{row.interval}</TableCell>
                    <TableCell align="center">{row.hekim}</TableCell>
                    <TableCell align="center">{row.oti}</TableCell>
                    <TableCell align="center">{row.masinlar}</TableCell>
                    <TableCell align="center">{row.seyyar}</TableCell>
                    <TableCell align="center">{row.barb}</TableCell>
                    <TableCell align="center">{row.uarb}</TableCell>
                    <TableCell align="center">{row.nevroloji}</TableCell>
                    <TableCell align="center">{row.hekimPsix}</TableCell>
                    <TableCell align="center">{row.sua}</TableCell>
                    <TableCell align="center">{row.hekimLab}</TableCell>
                    <TableCell align="center">
                      <IconButton aria-label="delete">
                        <DeleteIcon className='text-red-400 cursor-pointer'/>
                      </IconButton>

                    </TableCell>

                  </TableRow>
                )
              })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}