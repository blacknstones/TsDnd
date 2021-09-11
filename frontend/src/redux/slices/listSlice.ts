import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
//import {fetchCount} from ''
import { Task } from '../../types';
/* type Task = {
    id: number,
    title: string,
    description: string
}; */

interface TaskState {
  [key: string]: Task[];
}

const initialState: TaskState = {};

