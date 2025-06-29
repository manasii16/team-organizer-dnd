import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from '@hello-pangea/dnd';
import { Box, Grid } from '@mui/material';
import { fetch_emp } from './redux/employeesSlice';
import Column from '../column/Column';
import styles from './EmpDashboard.module.css';
import { moveEmployee } from "./redux/employeesSlice";


export default function EmpDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_emp());
  }, []);

  // const pool = useSelector((s) => s.employees.pool);
  // const team = useSelector((s) => s.employees.team);
  // const loading = useSelector((s) => s.employees.loading);
  // const error = useSelector((s) => s.employees.error);

  const {pool, team, loading, error}=useSelector((s)=>s.employees)

  const handle_drag_end=(result)=>{
    const {source, destination}= result;
    
    // console.log(result);
    if (!destination){
      return;
    }

    dispatch(
      moveEmployee({
        source_list: source.droppableId,
        dest_list: destination.droppableId,
        source_idx: source.index,
        dest_idx: destination.index,
      })
    );
  };


  return (
    <Box className={styles.container}>
      <DragDropContext onDragEnd={handle_drag_end}>
        <Grid container className={styles.grid_container}>

          <Grid className={styles.grid_item}>
            <Column
              title="Employee Pool"
              droppableId="pool"
              items={pool}
              loading={loading}
              error={error}
              emptyText="No employees in pool"
            />
          </Grid>

          <Grid className={styles.grid_item}>
            <Column
              title="My Team"
              droppableId="team"
              items={team}
              emptyText="No team members selected"
            />
          </Grid>

        </Grid>
      </DragDropContext>
    </Box>
  );
}
