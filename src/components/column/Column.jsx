import React from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { Paper, Typography,  Divider, CircularProgress, Box} from '@mui/material';
import styles from './Column.module.css';
import EmployeeCard from '../employeeCard/EmployeeCard'

export default function Column({ title,droppableId, items,emptyText, loading = false, error = null }){
  return (
    <Paper elevation={5} className={styles.column}>
      <Typography variant="h6" gutterBottom className={styles.heading}>
        {title}
      </Typography>
      <Divider className={styles.divider} />

      <Droppable droppableId={droppableId}>
        
        {(provided) => (
          <ul ref={provided.innerRef} 
          {...provided.droppableProps} 
          className={styles.list}>
            
            {loading &&(
              
              <Box display="flex" justifyContent="center" alignItems="center" height="300px">
                <CircularProgress />
              </Box>
            )}

            
            {!loading && error &&(
              
              <Box display="flex" justifyContent="center" alignItems="center" height="300px">
                <Typography color="error">{error}</Typography>
              </Box>
            )}

            
            {items.length === 0 && !loading && !error &&(
              
              <Box display="flex" justifyContent="center" alignItems="center" height="300px">
                <Typography variant="body2" color="text.secondary" fontWeight="bold">
                  {emptyText}
                </Typography>
              </Box>
            )}

            
            {!loading && items.length > 0 && !error &&
              items.map((emp, idx) => (
                <Draggable key={emp.id} draggableId={emp.id.toString()} index={idx}>
                  
                  {(provided)=>(
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={styles.listItem}
                    >
                      <EmployeeCard employee={emp} />
                    </li>
                  )}
                </Draggable>
              ))}

            {provided.placeholder}   {/* for drag item keep space */}
          </ul>

        )}
      </Droppable>
    </Paper>
  );
}

