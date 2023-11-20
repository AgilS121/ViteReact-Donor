import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import CustomButton from '../Elements/Button/CostumButton';
import { Link } from 'react-router-dom';


const CustomDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <CustomButton variant="filled" size="sm" title="Login" onClick={handleOpen}></CustomButton>
      <Dialog
        open={open}
        handler={handleOpen}
        className='bg-red-300 bg-opacity-10 rounded-xl'
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody className='flex flex-col justify-center text-center p-32 mx-auto font-extrabold gap-4'>
          OOPS AYO DONOR!!!!<br />
          ADA KESALAHAN!!!
          <Link to={'/login'}>
          <CustomButton variant="filled" size="sm" title="Login" onClick={handleOpen} />
          </Link>
        </DialogBody>
      </Dialog>
    </>
  )
}

export default CustomDialog