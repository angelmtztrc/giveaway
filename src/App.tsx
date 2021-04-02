import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography } from '@supabase/ui';

// providers
import AppProvider from './context/AppProvider';
// components
import Form from './components/Form';
import Resume from './components/Resume';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-500">
          <div className="flex items-center justify-center w-full min-h-screen">
            <main>
              <Typography.Title level={1} className="mb-6 text-center text-white font-bold">
                Random Name Picker
              </Typography.Title>
              <Switch>
                <Route exact path="/" component={Form} />
                <Route exact path="/resume" component={Resume} />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
