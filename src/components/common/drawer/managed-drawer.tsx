import { useUI } from '@contexts/ui.context';
import { Drawer } from '@components/common/drawer/drawer';
const ManagedDrawer = () => {
  const { displayCart, closeCart } = useUI();
  return (
    <Drawer
      open={displayCart}
      placement={'right'}
      onClose={closeCart}
      handler={false}
      showMask={true}
      level={null}
    >
      drawer
    </Drawer>
  );
};

export default ManagedDrawer;
