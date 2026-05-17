import ProductList from './components/product-card/ProductList';
import ProfileCard from './components/profile-card/ProfileCard';
import TodoForm from './components/todo-app-split/TodoForm';
import dataUsers from './data/users';

function App() {
  return (
    <div className=' max-w-200 m-auto p-4 flex flex-col gap-5 md:pt-20'>
      {/* Profile Card */}
      <article>
        <h1 className='text-center'>Profile Card</h1>
        <div className='grid md:grid-cols-2 gap-2 md:gap-5'>
          {dataUsers.map((dataUser) => (
            <ProfileCard key={dataUser.id} user={dataUser} />
          ))}
        </div>
      </article>

      {/* Todo List */}
      <article>
        <h1>Todo List</h1>
        <TodoForm />
      </article>

      {/* Product List */}
      <article>
        <h1>Product List</h1>
        <ProductList />
      </article>
    </div>
  );
}

export default App;
