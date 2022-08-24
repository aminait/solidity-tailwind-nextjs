import { Hero, Keypoints, Lectures } from '@components/course';
import { Modal } from '@components/ui';
import { BaseLayout } from '@components/layout';
export default function Course() {
  return (
    <BaseLayout>
      <div className="py-4">
        <Hero />
      </div>

      <Keypoints />

      <Lectures />

      <Modal />
    </BaseLayout>
  );
}
