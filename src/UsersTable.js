import { Paper, TableContainer, Table, TableCell, TableHead, TableRow, TableBody, Button } from "@mui/material";


const UsersTable = ({ rows}) => {
    return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                 {
                rows.length> 0? rows.map(row => (
                    <TableRow key={row.id} sx= {{ '&:last-child td, &:last-child td': {border:0}}}>
                    <TableCell component='th' scope="row">{row.id}</TableCell>
                    <TableCell component='th' scope="row">{row.name}</TableCell>
                    <TableCell >
                        <Button
                            sx={{ margin: '8px 10px'}}
                            onClick={()=>{} }
                        >
                            Update
                        </Button>
                        <Button
                            sx={{ margin: '8px 10px'}}
                            onClick={()=>{} }
                        >
                            Delete
                        </Button>

                     </TableCell>
                    </TableRow>
                    )): (
                        <TableRow  sx= {{ '&:last-child td, &:last-child td': {border:0}}}>
                          <TableCell component='th' scope="row">No data</TableCell>
                        </TableRow>
                    )
                 }
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default UsersTable;