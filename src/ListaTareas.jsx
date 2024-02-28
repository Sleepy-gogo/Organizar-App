import Tarea from './components/Tarea';

function ListaTareas({ tareas, setTareas }) {
  return (
    <div className="w-full lg:h-full flex flex-col justify-center items-center">
      <h1 className="text-5xl shrink-0 font-bold text-amber-400 text-center mb-8 lg:text-7xl">
        Tareas
      </h1>
      <div className="flex shrink-0 flex-col gap-3 items-center w-full max-w-screen-md lg:h-96 overflow-y-scroll pb-8">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            setTareas={setTareas}
            tareas={tareas}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaTareas;