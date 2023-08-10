import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TableFooter from '@mui/material/TableFooter';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";
import { IconButton, Stack, Typography } from '@mui/material';

type props = {
  columns?: object[],
  rowsData?: object[]
}

const DataTable = ({
  columns,
  rowsData
}: props) => {

  const ReactTable = useTable(
    {
      columns,
      data: rowsData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    headerGroups,
    state: { pageIndex }
  } = ReactTable;

  return (
    <Box>
      <Box marginBottom={2}>
        <TextField
          label="Search"
          variant="outlined"
          sx={{
            width: '100%'
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setGlobalFilter(e.currentTarget.value);
          }}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            {headerGroups.map((headerGroup: any) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    sortDirection={column.isSortedDesc ? 'desc' : 'asc'}
                    sx={{ minWidth: '130px' }}
                  >
                    <TableSortLabel active={column.isSorted}
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                      sx={{
                        fontWeight: 700
                      }}
                    >
                      {column.render("Header")}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          {pageOptions.length > 0 ? (
            <TableBody>
              {page.map((row: any, i: number) => {
                prepareRow(row);
                return (
                  <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {row.cells.map((cell: any, key: number) => {
                      return (
                        <TableCell key={key}>{cell.render("Cell")}</TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          ) : (
            <Box>
              {/* <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 500,
                  padding: 20
                }}
              >
                No Record Found
              </Typography> */}
            </Box>
          )}
          <TableFooter>
            <TableRow>
              <Stack
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={2}
                margin={2}
                marginLeft={'10px'}
                width={'100%'}
                minWidth={'150px'}
              >
                <Box>
                  <Typography>
                    {pageOptions.length > 0 ? pageIndex + 1 : pageIndex} of {pageOptions.length}
                  </Typography>
                </Box>
                <IconButton onClick={() => previousPage()} disabled={!canPreviousPage}>
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
                  <ChevronRightIcon />
                </IconButton>
              </Stack>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default DataTable;