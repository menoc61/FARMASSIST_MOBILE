import { Tabs  } from 'expo-router';
import { LayoutGrid,ClipboardList, Sprout, UserRoundCog,ScanSearch  } from '~/components/Icons';
import { ModalToggle } from '~/components/ModalToggle';
import { ThemeToggle } from '~/components/ThemeToggle';
import { NAV_THEME } from '~/lib/constants';

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: NAV_THEME.tabbackground,
    }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon({ color, size }) {
            return <LayoutGrid color={color} size={size} />;
          },
          // headerLeft: () => <ModalToggle />,
          headerRight: () => <ThemeToggle />,
        }}
      />
      <Tabs.Screen
        name='manage'
        options={{
          title: 'Manage',
          tabBarIcon({ color, size }) {
            return <ClipboardList color={color} size={size} />;
          },
          headerRight: () => <ThemeToggle />,
        }}
      />
      <Tabs.Screen
        name='detect'
        options={{
          title: 'Detect',
          tabBarIcon({ color, size }) {
            return <ScanSearch color={color} size={size} />;
          },
          headerRight: () => <ThemeToggle />,
        }}
      />
      <Tabs.Screen
        name='monitor'
        options={{
          title: 'Monitor',
          tabBarIcon({ color, size }) {
            return < Sprout color={color} size={size} />;
          },
          headerRight: () => <ThemeToggle />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon({ color, size }) {
            return <UserRoundCog color={color} size={size} />;
          },
          headerRight: () => <ThemeToggle />,
          tabBarBadge: 3,
        }}
      />
    </Tabs>
  );
}
