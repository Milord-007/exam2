import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState([
    {
      id: 1,
      title: "Ardasher made this Todo",
      description: "It was time consuming ",
      completed: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addData = (event) => {
    event.preventDefault();
    if (!title) {
      alert("Please enter a title");
      return;
    }
    let obj = {
      id: new Date().getTime(),
      title: title,
      description: desc,
      completed: false,
    };
    setData([...data, obj]);
    setTitle("");
    setDesc("");
  };

  const deleteItem = (id) => {
    let arr = data.filter((el) => {
      return el.id !== id;
    });
    setData(arr);
  };

  const completedTask = (id) => {
    let done = data.map((el) => {
      if (el.id === id) {
        return { ...el, completed: !el.completed };
      }
      return el;
    });
    setData(done);
  };

  const [modal, setModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [idx, setIdx] = useState(null);

  const handlemodal = (ell) => {
    setModal(true);
    setIdx(ell.id);
    setEditDesc(ell.description);
    setEditTitle(ell.title);
  };

  function editTodo(event) {
    event.preventDefault();
    let arr = data.map((e) => {
      if (e.id == idx) {
        e.title = event.target["inp"].value;
        e.description = event.target["txtarea"].value;
      }
      return e;
    });
    setData(arr);
    setModal(false);
  }

  const [fil, setFil] = useState("All");
  const [search, setSearch] = useState("");


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <button
        className="w-[100%] dark:bg-[#14223f] dark:text-white bg-red-500 text-white py-2 px-4 rounded font-bold text-center cursor-pointer shadow-md transition duration-300 hover:bg-red-600"
        onClick={handleClickOpen}
      >
        Order
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', background: 'white', color: 'black' }} className="dark:bg-[#212B31] dark:text-[white]">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Todo
            </Typography>
            <button className="bg-[#181c2c] text-white hover:bg-yellow-500 hover:text-black py-2 px-4 rounded-full transition-colors duration-300" onClick={handleClose}>
                             Save
            </button>
          </Toolbar>
        </AppBar>
        <List className='dark:bg-[#03070f]' >
        <div className="mx-auto min-h-[50vh] w-[100%] bg-[white] pb-[100px] pt-[5%] text-[white] dark:bg-[#03070f]">
        <div className="mx-auto min-h-[100vh]   w-[80%]">
          <div className="h-[10px] w-full "></div>
          <p className="pt-[20px] text-center text-[30px] font-[700] ">
            Add Your Order
          </p>

          <div className="mx-auto w-[90%] ">
            <form
              className="min-h-[50vh] rounded-lg  px-4 pb-2 pt-2 text-[20px] shadow-md bg-[#181c2c]"
              onSubmit={addData}
            >
              <div className="mb-6">
                {/* input */}
                <label
                  htmlFor=""
                  className="mb-2 block font-bold text-gray-700"
                >
                  Items
                </label>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  type="text"
                  placeholder="Title..."
                  className="focus:shadow-outline h-[50px] w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor=""
                  className="mb-2 block font-bold text-gray-700"
                >
                  Description
                </label>
                <textarea
                  placeholder="Write your notes here"
                  value={desc}
                  onChange={(event) => setDesc(event.target.value)}
                  className="focus:shadow-outline h-[50px] w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                ></textarea>
              </div>
              <div className="flex w-full justify-center">
                <button
                  onClick={() => addData()}
                  className=" w-[200px] h-[35px] transform rounded-full bg-[#dd2b2b] px-2  text-[20px] font-bold shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  {" "}
                  ADD
                </button>
              </div>
            </form>
          </div>
          <p className="pt-[20px] text-center text-[30px] font-[700] ">
            Ordered goods <i className="fa-solid fa-down-long"></i>
          </p>
          <div className="mt-[5%] h-[10px] w-full bg-[white]"></div>

          <div className="flex w-full justify-between pt-5 text-gray-700">
            <select
              value={fil}
              className="h-[40px] w-[200px] rounded-lg bg-[#181c2c] text-white dark:bg-[white] dark:text-black"
              onChange={(e) => setFil(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Done">Done</option>
              <option value="Undone">Undone</option>
            </select>
            <input
              type="search"
              className="h-[40px] w-[200px] rounded-lg p-[10px] bg-[#181c2c] text-white dark:bg-white dark:text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks..."
            />
          </div>
          <div className="cards m-auto mt-[50px]  h-[70vh] w-[90%] flex-wrap justify-evenly gap-y-[20px]  overflow-y-scroll rounded-[50px] bg-[#36345c] p-[10px] pt-[10px] text-[30px] text-[black]">
            {
              search.trim().length == 0 ? data
              .filter((el) => {
                if (fil == "Done") {
                  return el.completed;
                } else if (fil == "Undone") {
                  return !el.completed;
                }
                return el;
              })
              .map((el) => {
                return (
                  <div key={el.id}>
                    <div className=" min-h-[20vh]  w-[100%] rounded-3xl bg-white mt-2  px-8">
                      {el.completed ? (
                        <s>
                          <p className="text-[22px] text-[red] ">Order</p>
                        </s>
                      ) : (
                        <p className="text-[22px]">Order</p>
                      )}
                      {/* <p className='text-[80px]'>Title</p> */}
                      <div className="title h-[40px] p-1 overflow-y-scroll bg-[#b4acac] text-[18px]">
                        {el.title}
                      </div>

                      {el.completed ? (
                        <s>
                          <p className="text-[22px] text-[red]">Description </p>
                        </s>
                      ) : (
                        <p className="text-[22px]">Description </p>
                      )}

                      <div className="desc h-[50px] p-1 overflow-y-scroll bg-[#b4acac] text-[20px]">
                        {el.description}
                      </div>
                      {/* icons */}
                      <p className="sss hidden text-end font-sans text-[14px]">
                        Edited
                      </p>

                      <div className="flex justify-end pt-[5px]">
                        <i
                          className="fa-solid fa-pen-to-square mr-[20px] cursor-pointer text-[20px]"
                          onClick={() => handlemodal(el)}
                        ></i>
                        <i
                          className="fa-solid fa-trash-can mr-[20px] cursor-pointer text-[20px] text-[red]"
                          onClick={() => deleteItem(el.id)}
                        ></i>
                        <span className="mr-[10px] text-[16px] font-[700]">
                          Done
                        </span>
                        <input
                          type="checkbox"
                          checked={el.completed}
                          onChange={() => completedTask(el.id)}
                          className=" w-[20px] rounded-full border-2 border-gray-400 checked:border-transparent checked:bg-blue-500  focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                );
              }) :data
              .filter((el) => {
                if (fil == "Done") {
                  return el.completed;
                } else if (fil == "Undone") {
                  return !el.completed;
                }
                return el;
              }).filter((el)=>{
                return el.title.toLowerCase().includes(search.toLowerCase()) || el.description.toLowerCase().includes(search.toLowerCase())
              })
              .map((el) => {
                return (
                  <div key={el.id}>
                    <div className=" min-h-[20vh]  w-[340px] rounded-3xl bg-white  px-8">
                      {el.completed ? (
                        <s>
                          <p className="text-[30px] text-[red] ">Title</p>
                        </s>
                      ) : (
                        <p className="text-[30px]">Title</p>
                      )}
                      {/* <p className='text-[80px]'>Title</p> */}
                      <div className="title h-[50px] overflow-y-scroll bg-[#b4acac] text-[20px]">
                        {el.title}
                      </div>

                      {el.completed ? (
                        <s>
                          <p className="text-[30px] text-[red]">Description </p>
                        </s>
                      ) : (
                        <p className="text-[30px]">Description </p>
                      )}

                      <div className="desc h-[80px] overflow-y-scroll bg-[#b4acac] text-[20px]">
                        {el.description}
                      </div>
                      {/* icons */}
                      <p className="sss hidden text-end font-sans text-[14px]">
                        Edited
                      </p>

                      <div className="flex justify-end pt-[5px]">
                        <i
                          className="fa-solid fa-pen-to-square mr-[20px] cursor-pointer text-[25px]"
                          onClick={() => handlemodal(el)}
                        ></i>
                        <i
                          className="fa-solid fa-trash-can mr-[20px] cursor-pointer text-[25px] text-[red]"
                          onClick={() => deleteItem(el.id)}
                        ></i>
                        <span className="mr-[10px] text-[22px] font-[700]">
                          Done
                        </span>
                        <input
                          type="checkbox"
                          checked={el.completed}
                          onChange={() => completedTask(el.id)}
                          className=" w-[25px] rounded-full border-2 border-gray-400 checked:border-transparent checked:bg-blue-500  focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
          {modal ? (
            <div className="fixed right-0 top-0 flex h-[100vh] w-full items-center justify-center bg-[#0000006c]">
              <div className="flex min-h-[200px] w-[60%]  flex-col justify-center rounded-xl bg-[#181c2c] px-5">
                <div className="w-[100%]">
                  <p
                    onClick={() => setModal(false)}
                    className="cursor-pointer text-end text-[30px] text-[white]"
                  >
                    X
                  </p>
                </div>
                <form className="" onSubmit={editTodo}>
                  <div>
                    <input
                      type="text"
                      name="inp"
                      className=" focus:shadow-outline h-[50px] w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                  </div>
                  <div className="pt-[8px]">
                    <textarea
                      name="txtarea"
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={editDesc}
                      onChange={(e) => setEditDesc(e.target.value)}
                    />
                  </div>
                  <div className="pb-[10px]">
                    <button className="h-[40px] w-[140px] rounded-xl bg-[#4a93cece] text-[20px] ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
        </List>
      </Dialog>
    </div>
  );
}