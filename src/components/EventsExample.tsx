import React, {
  ChangeEventHandler,
  DetailedHTMLProps,
  DragEventHandler,
  FC,
  HTMLAttributes,
  MouseEventHandler,
  useRef,
  useState,
} from 'react';

export const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEventHandler<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: MouseEventHandler<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    console.log('move');
  };
  const dropHandler = (e: DragEventHandler<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('drop');
  };
  const dragLeave = (e: DragEventHandler<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dragOver = (e: DragEventHandler<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <>
      <div>
        <input type="text" onChange={changeHandler} placeholder='Управляемый'/>
        <input ref={inputRef} type="text" onChange={changeHandler} placeholder='Неуправляемый'/>
        <button onClick={clickHandler}>sdfsdfsdf</button>
        <div
          onDrag={dragHandler}
          draggable
          style={{ width: 200, height: 200, background: 'red' }}></div>
        <div
          onDrop={dropHandler}
          onDragLeave={dragLeave}
          onDragOver={dragOver}
          style={{
            width: 200,
            height: 200,
            background: isDrag ? 'red' : 'blue',
            marginTop: 15,
          }}></div>
      </div>
    </>
  );
};
