Meteor.methods({
  'user.update': (user) => {
    if (!Meteor.userId()) { throw new Meteor.Error('not-authorized'); }

    Meteor.users.update(
      user._id, {
        $set: { ...user },
      },
    );
  },
});
