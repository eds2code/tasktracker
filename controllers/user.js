Meteor.methods({
  'user.update': (user) => {
    const currentUserId = Meteor.userId();
    if (!currentUserId) { throw new Meteor.Error('not-authorized'); }

    Meteor.users.update(
      currentUserId, {
        $set: { ...user },
      },
    );
  },
});
